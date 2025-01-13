import {getCurrentInstance} from 'vue'

export default function useGetGlobalProperties() {
    const { appContext: {app: {config: {globalProperties}}}} = getCurrentInstance()
    return {...globalProperties}
}
