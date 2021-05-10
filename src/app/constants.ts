import { environment } from '../environments/environment'

export class Constants {
    private static API_URL = environment.API_URL
    public static GET_ENDPOINTS = Constants.API_URL + "getEndpoints"
    public static GET_SYSINFO = Constants.API_URL + "sysinfo/"
    public static INIT_K8S = "tasks/initk8s";
    public static GET_TASKS = Constants.API_URL + "tasks/list";
    public static CREATE_TASK = Constants.API_URL + "tasks/create";
    public static DASH_INFO = Constants.API_URL + "dashinfo";
    public static INTRUSION_HOSTS = Constants.API_URL + "id/get/hosts";
    public static INTRUSION_HOST_BY_ID = Constants.API_URL + "id/get/host/";
    public static INTRUSION_HOST_SYSINFO_BY_ID = Constants.API_URL + "id/host/sysinfo/";
    public static INTRUSION_HOST_PROCS_BY_ID = Constants.API_URL + "id/host/proc/";
    public static INTRUSION_HOST_NETSTAT = Constants.API_URL + "id/host/netstat/";
    public static INTRUSION_IPREP_RESULTS = Constants.API_URL + "id/research/iprep/results"
    public static INTRUSION_NETSTAT_RESEARCH = Constants.API_URL + "id/research/netstat/";

    // AUTH
    public static AUTH_LOGIN = Constants.API_URL + "auth/login";
}