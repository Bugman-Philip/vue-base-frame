export class Utils {
    static getRem(): number {
        const rem = window.innerWidth < 1366 ? (1366 / 95).toFixed(2) : (window.innerWidth / 95).toFixed(2);
        return Number(rem);
    }

    static setCookie(name: string, value: string): any {
        const Days = 30;
        const exp: any = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + '=' + btoa(value) + ';expires=' + exp.toGMTString();
        return true;
    }

    static getCookie(name: string): boolean | string {
        let value = '';
        const cookieStr: any = document.cookie.split(';');
        cookieStr.forEach((e: any, i: any) => {
            if (e.split('=')[0].indexOf(name) > -1) {
                value = cookieStr[i].replace(`${name}=`, '');
                return true;
            }
        });
        return value === '' ? false : value as string;
    }

    static getQueryString(name: string): any {
        const reg: any = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        const r: any = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }

    static filterUrl(name: string): string {
        const value: string = this.getQueryString(name);
        return window.location.href.replace(`${name}=${value}`, '');
    }
}
