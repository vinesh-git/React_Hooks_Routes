import axios from "axios";

const axiosclient = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com",
    timeout : 5000
})


axiosclient.interceptors.request.use((config) => {
    console.log("request Interceptor : ",config.url);
    config.headers.Authorization = "Bearer dummy-token";
    return config;
},(error) => Promise.reject(error)
)


axiosclient.interceptors.response.use((response) => {
    console.log("response interceptor :",response.data );
    return response;
},(error) => {
    console.log("Global error : ", error.message);
    if(error.response.status === 404)
        alert("resource not found");
    return Promise.reject(error);
}
)


export default axiosclient;