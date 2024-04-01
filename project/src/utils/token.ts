// 封装本地存储token方法
export const SETTOKEN = (token: string) => {
    localStorage.setItem('TOKEN', (token as string))
};

export const GETTOKEN = () => {
    return localStorage.getItem('TOKEN')
};