import axios from 'axios';

// 请求拦截
axios.interceptors.request.use(config => {
     let token = localStorage.getItem('token');
     if(token){
          config.headers['Authorization'] = token
     }
     return config;
}, error => {
     // Do something with request error
     return Promise.reject(error);
});

// 响应拦截
axios.interceptors.response.use(response => {
     localStorage.setItem('token', response.data.token)     
     return response;

}, error => {
     // Do something with response error
     return Promise.reject(error);
});

//登录请求
export async function loginFn(data) {
       let aa = await  axios.post('http://localhost:5500/login', data);
       return aa 
 }


//主页验证
export async function isloginFn(){
     let ccs = await axios.post('http://localhost:5500/islogin')
     return ccs
}
