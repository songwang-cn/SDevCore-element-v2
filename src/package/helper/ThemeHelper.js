const version = require("element-ui/package.json").version; // 版本号

const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`;

const ORIGINAL_THEME = "#409EFF"; // element-ui 默认的颜色

export class ThemeHelper {
  // 判断是否为颜色
  isColorValue(bgVal) {
    if (bgVal) {
      let type = "^#[0-9a-fA-F]{6}$";
      let re = new RegExp(type);
      if (bgVal.match(re) == null) {
        type =
          "^[rR][gG][Bb][(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,){2}[\\s]*(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)[\\s]*[)]{1}$";
        re = new RegExp(type);
        if (bgVal.match(re) == null) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    }
  }
  // 更新主题色
  updateStyle(style, oldCluster, newCluster) {
    let newStyle = style;
    oldCluster.forEach((color, index) => {
      newStyle = newStyle.replace(new RegExp(color, "ig"), newCluster[index]);
    });
    return newStyle;
  }
  // 改变颜色
  static setThemeColor(colorValue) {
    const instance = new this();
    if (instance.isColorValue(colorValue)) {
      const themeCluster = instance.getThemeCluster(
        colorValue.replace("#", "")
      );
      const originalCluster = instance.getThemeCluster(
        ORIGINAL_THEME.replace("#", "")
      );
      const getHandler = (variable, id) => {
        return () => {
          const newStyle = instance.updateStyle(
            instance[variable],
            originalCluster,
            themeCluster
          );
          let styleTag = document.getElementById(id);
          // 判断是否已经存在标签，没有则生成
          if (!styleTag) {
            styleTag = document.createElement("style");
            styleTag.setAttribute("id", id);
            document.head.appendChild(styleTag);
          }
          // 替换为新的样式表
          styleTag.innerText = newStyle;
        };
      };

      const chalkHandler = getHandler("chalk", "chalk-style");
      // 判断是否已有样式表，没有则根据url请求样式表内容
      if (!instance.chalk) {
        instance.getCSSString(url, chalkHandler, "chalk");
      } else {
        chalkHandler();
      }
      document.documentElement.style.setProperty("--theme-color", colorValue);
      localStorage.setItem("--theme-color", colorValue);
    } else {
      console.error("改变主题色出错， 得到的值并不是一个合法的颜色值");
    }
  }
  static getThemeColor() {
    return (
      localStorage.getItem("--theme-color") ||
      document.documentElement.style.getPropertyValue("--theme-color") ||
      ORIGINAL_THEME
    );
  }
  // 初始化时获取默认主题的样式并复制给this.chalk
  getCSSString(url, callback, variable) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this[variable] = xhr.responseText.replace(/@font-face{[^}]+}/, "");
        callback();
      }
    };
    xhr.open("GET", url);
    xhr.send();
  }
  // 获取系列色
  getThemeCluster(theme) {
    const formatColor = (color) => {
      const str = color.toString(16);
      return str.length === 2 ? str : "0" + str;
    };

    const tintColor = (color, tint) => {
      let red = parseInt(color.slice(0, 2), 16);
      let green = parseInt(color.slice(2, 4), 16);
      let blue = parseInt(color.slice(4, 6), 16);

      if (tint === 0) {
        return [red, green, blue].join(",");
      } else {
        red += Math.round(tint * (255 - red));
        green += Math.round(tint * (255 - green));
        blue += Math.round(tint * (255 - blue));

        red = formatColor(red);
        green = formatColor(green);
        blue = formatColor(blue);
        return `#${red}${green}${blue}`;
      }
    };

    const shadeColor = (color, shade) => {
      let red = parseInt(color.slice(0, 2), 16);
      let green = parseInt(color.slice(2, 4), 16);
      let blue = parseInt(color.slice(4, 6), 16);

      red = Math.round((1 - shade) * red);
      green = Math.round((1 - shade) * green);
      blue = Math.round((1 - shade) * blue);

      red = formatColor(red);
      green = formatColor(green);
      blue = formatColor(blue);
      return `#${red}${green}${blue}`;
    };

    const clusters = [theme];
    for (let i = 0; i <= 9; i++) {
      clusters.push(tintColor(theme, Number((i / 10).toFixed(2))));
    }
    clusters.push(shadeColor(theme, 0.1));
    return clusters;
  }
}
