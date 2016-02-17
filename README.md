# ReactOdometer
将Odometer转化为react控件。

# 注意
这个控件并没有试图替代[odometer](https://github.com/HubSpot/odometer)，只是把odometer的api封装为react的api而已。你依然需要引入odometer的js和css文件。

##[DEMO](http://eeandrew.github.io/demos/reactodometer/index.html)

![image](https://github.com/eeandrew/ReadmeResource/blob/master/img/react-odometer/react-odometer.gif)

# 使用
* rnStyle : css类名。用于定制显示的格式
* value : 显示的值
* format : 显示的格式。如11,222。请参考[这里](http://github.hubspot.com/odometer/)

```
  <RunningNumber rnStyle="my-running-number" value={this.state.value} format={this.state.format}/>
```

# TODO
* [ ] 动态更改odometer的format
