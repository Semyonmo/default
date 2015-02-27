export class logger {
    static debag(text) {
        console.log(`%c ${text} `, 'background: #FFFFFF; color: #6700C7');
    }

    static error(text) {
        console.log(`%c ${text} `, 'background: #FF0000; color: #fff');
    }

    static info(text) {
        console.log(`%c ${text} `, 'background: #1281FF; color: #fff');
    }

    static title(text) {
        console.log(`%c ----------------${text.toUpperCase()}---------------- `, 'background: #000; color: #fff');
    }
}