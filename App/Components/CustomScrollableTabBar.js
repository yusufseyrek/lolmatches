const React = require('react');
const {
  View,
  Animated,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Platform,
  findNodeHandle,
  Dimensions,
} = require('react-native');

var StaticData = require('./StaticData');

const TAB_HEIGHT = 40;
const BLUE_COLOR = StaticData.BLUE_COLOR;
const PURPLE_COLOR = StaticData.PURPLE_COLOR;

const WINDOW_WIDTH = Dimensions.get('window').width;

const CustomScrollableTabBar = React.createClass({

  getDefaultProps() {
    return {
      scrollOffset: 52,
    };
  },

  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
    underlineColor: React.PropTypes.string,
    underlineHeight: React.PropTypes.number,
    backgroundColor: React.PropTypes.string,
    activeTextColor: React.PropTypes.string,
    inactiveTextColor: React.PropTypes.string,
    scrollOffset: React.PropTypes.number,
  },

  getInitialState() {
    this._tabsMeasurements = [];
    return {
      _leftTabUnderline: new Animated.Value(0),
      _widthTabUnderline: new Animated.Value(0),
      _containerWidth: null,
      _tabUnderlineColor: 'blue'
    };
  },

  updateView(offset) {
    const position = Math.floor(offset.value);
    const pageOffset = offset.value % 1;
    const tabCount = this.props.tabs.length;
    
    if (tabCount === 0 || offset.value < 0 || offset.value > tabCount - 1) {
      return;
    }
    
    if (this.necessarilyMeasurementsCompleted(position)) {
      this.updateTabPanel(position, pageOffset);
      this.updateTabUnderline(position, pageOffset, tabCount);
      if(pageOffset > .5){
        if(this.state._tabUnderlineColor !== PURPLE_COLOR)
            this.setState({_tabUnderlineColor:PURPLE_COLOR});
      }else{
          if(this.state._tabUnderlineColor !== BLUE_COLOR)
            this.setState({_tabUnderlineColor:BLUE_COLOR});
      }
    }
    
  },

  necessarilyMeasurementsCompleted(position) {
    return this._tabsMeasurements[position] && this._tabsMeasurements[position + 1];
  },

  updateTabPanel(position, pageOffset) {
    const absolutePageOffset = pageOffset * this._tabsMeasurements[position].width;
    let newScrollX = this._tabsMeasurements[position].left + absolutePageOffset;

    newScrollX -= this.props.scrollOffset;
    newScrollX = newScrollX >= 0 ? newScrollX : 0;

    if (Platform === 'android') {
      this._scrollView.scrollTo({x: newScrollX, y: 0, });
    } else {
      const rightBoundScroll = this._tabContainerMeasurements.width - (this._containerMeasurements.width);
      newScrollX = newScrollX > rightBoundScroll ? rightBoundScroll : newScrollX;
      this._scrollView.scrollTo({x: newScrollX, y: 0, });
    }

  },

  updateTabUnderline(position, pageOffset, tabCount) {
    const lineLeft = this._tabsMeasurements[position].left;
    const lineRight = this._tabsMeasurements[position].right;

    if (position < tabCount - 1) {
      const nextTabLeft = this._tabsMeasurements[position + 1].left;
      const nextTabRight = this._tabsMeasurements[position + 1].right;

      const newLineLeft = (pageOffset * nextTabLeft + (1 - pageOffset) * lineLeft);
      const newLineRight = (pageOffset * nextTabRight + (1 - pageOffset) * lineRight);

      this.state._leftTabUnderline.setValue(newLineLeft);
      this.state._widthTabUnderline.setValue(newLineRight - newLineLeft);
    } else {
      this.state._leftTabUnderline.setValue(lineLeft);
      this.state._widthTabUnderline.setValue(lineRight - lineLeft);
    }
  },

  renderTabOption(name, page) {
    const isTabActive = this.props.activeTab === page;
    const activeTextColor = this.props.activeTextColor || 'navy';
    const inactiveTextColor = this.props.inactiveTextColor || 'black';
    const textStyle = this.props.textStyle || {};

    return <TouchableOpacity
      key={name}
      ref={'tab_' + page}
      accessible={true}
      accessibilityLabel={name}
      accessibilityTraits='button'
      style={styles.tab}
      onPress={() => this.props.goToPage(page)}
      onLayout={this.measureTab.bind(this, page)}
      >
      <View>
        <Text style={[{color: isTabActive ? activeTextColor : inactiveTextColor}, textStyle, styles.textStyle]}>{name}</Text>
      </View>
    </TouchableOpacity>;
  },

  measureTab(page) {
    const tabContainerhandle = findNodeHandle(this.refs.tabContainer);
    this.refs['tab_' + page].measureLayout(tabContainerhandle, (ox, oy, width, height, pageX, pageY) => {
      this._tabsMeasurements[page] = {left: ox, right: ox + width, width: width, height: height, };

      this.updateView({value: this.props.scrollValue._value, });
    });
  },

  render() {
    const tabUnderlineStyle = {
      position: 'absolute',
      height: this.props.underlineHeight || TAB_HEIGHT,
      bottom: 0
    };

    this.props.scrollValue.addListener(this.updateView);

    const dynamicTabUnderline = {
      left: this.state._leftTabUnderline,
      width: this.state._widthTabUnderline,
      backgroundColor : this.state._tabUnderlineColor
    };

    return  <View
      style={[styles.container, {backgroundColor: this.props.backgroundColor || null, }, ]}
      onLayout={this.onContainerLayout}
    >
      <ScrollView
        ref={(scrollView) => { this._scrollView = scrollView; }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.scrollableContainer}
        directionalLockEnabled={true}
        scrollEventThrottle={16}
      >
        <View
          style={[styles.tabs, {width: this.state._containerWidth}]}
          ref={'tabContainer'}
          onLayout={this.onTabContainerLayout}>
          
          <View style={styles.tabsBackground}></View>
          <Animated.View style={[tabUnderlineStyle, dynamicTabUnderline, ]} />
          {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
        </View>
      </ScrollView>
    </View>;
  },

  onTabContainerLayout(e) {
    this._tabContainerMeasurements = e.nativeEvent.layout;
    let width = this._tabContainerMeasurements.width;
    if(width < WINDOW_WIDTH){
      width = WINDOW_WIDTH;
    }
    this.setState({
      _containerWidth: width,
    })
  },

  onContainerLayout(e) {
    this._containerMeasurements = e.nativeEvent.layout;
  },
});

module.exports = CustomScrollableTabBar;

const styles = StyleSheet.create({
  tab: {
    height: TAB_HEIGHT - 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    flex:1
  },
  container: {
    height: TAB_HEIGHT,
    marginBottom:10
  },
  tabs: {
    height: TAB_HEIGHT - 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabsBackground:{
    position:'absolute',
    top:0,left:0,right:0,bottom:0,
    backgroundColor:'#222',
    opacity:.4
  },
  scrollableContainer: {
    height: TAB_HEIGHT,
  },
  textStyle:{
      backgroundColor:'transparent',
      color:'#fff',
      fontSize:17
  }
});