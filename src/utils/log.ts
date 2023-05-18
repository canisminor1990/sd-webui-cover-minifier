import chalk from 'chalk';

const emoji = {
  success: String.fromCodePoint(0x2705), // ✅
  error: String.fromCodePoint(0x274c), // ❌
  warn: String.fromCodePoint(0x1f625), // 😥
  info: String.fromCodePoint(0x1f535), // 🔵
  start: String.fromCodePoint(0x1f476), // 👶
  pack: String.fromCodePoint(0x1f4e6), // 📦
  module: String.fromCodePoint(0x26aa), // ⚪
  waiting: String.fromCodePoint(0x231b), // ⌛
  boosting: String.fromCodePoint(0x1f525), // 🔥
  done: String.fromCodePoint(0x2728), // ✨
};
class Log {
  opt = {
    align: true,
    maxLength: 8,
  };
  _getTitle(emoji: string, text: string, color?: string) {
    const { maxLength } = this.opt;
    let spacing = '';
    if (this.opt.align && text.length < maxLength) {
      for (let i = 0; i < maxLength - text.length; i++) {
        spacing += ' ';
      }
    }
    const msg = color ? `${chalk[color](text)}${spacing}` : text + spacing;
    return `${emoji}  ${msg}`;
  }
  log(...msg) {
    console.log(...msg);
  }
  success(...msg) {
    this.log(this._getTitle(emoji.success, 'Success', 'green'), ...msg);
  }
  info(...msg) {
    this.log(this._getTitle(emoji.info, 'Info', 'blue'), ...msg);
  }
  warn(...msg) {
    this.log(this._getTitle(emoji.warn, 'Warn', 'yellow'), ...msg);
  }
  waitting(...msg) {
    this.log(this._getTitle(emoji.waiting, 'Wait', 'grey'), ...msg);
  }
  start(...msg) {
    this.log(this._getTitle(emoji.start, 'Done'), ...msg);
  }
  done(...msg) {
    this.log(this._getTitle(emoji.done, 'Done'), ...msg);
  }
  error(...msg) {
    this.log(this._getTitle(emoji.error, 'Error', 'red'), ...msg);
  }
  boosting(...msg) {
    this.log(this._getTitle(emoji.boosting, 'Boosting', 'magenta'), ...msg);
  }
  pack(title, ...msg) {
    this.log(this._getTitle(emoji.pack, title, 'magenta'), ...msg);
  }
  module(title, ...msg) {
    this.log(this._getTitle(emoji.pack, title, 'cyan'), ...msg);
  }
  json(obj, title) {
    this.log(
      [this._getTitle(emoji.module, title || 'Log'), JSON.stringify(obj, null, 2)].join('\n'),
    );
  }
  dye(color, ...msg) {
    return chalk[color](...msg);
  }
}
export default new Log();
