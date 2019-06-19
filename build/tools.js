const path = require('path');
const yaml = require('js-yaml');
const fs = require('fs');
// 获取键盘配置
const getKeyboardData = () => {
  try {
    const keyboard = yaml.load(
      fs.readFileSync(path.resolve(__dirname, '../src/keyboard.yml'), 'utf8')
    );
    return keyboard;
  } catch (e) {
    console.log(e);
  }
}
const keyboard = getKeyboardData();

exports.keyboard = keyboard;
