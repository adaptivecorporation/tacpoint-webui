export class Constants {
    private static API_URL = "https://tacpoint-controller-001.adaptive-api.com/v0/api/"
    // private static API_URL = "http://localhost:4444/v1/api/"
    public static GET_ENDPOINTS = Constants.API_URL + "getEndpoints"
    public static GET_SYSINFO = Constants.API_URL + "sysinfo/"
    public static INIT_K8S = "tasks/initk8s";
    public static GET_TASKS = Constants.API_URL + "tasks/list";
    public static CREATE_TASK = Constants.API_URL + "tasks/create";
}