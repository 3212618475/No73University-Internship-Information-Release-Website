const base = {
    get() {
        return {
            url : "http://localhost:8080/gaoxiaoshixixinxi/",
            name: "gaoxiaoshixixinxi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/gaoxiaoshixixinxi/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "高校实习信息发布网站"
        } 
    }
}
export default base
