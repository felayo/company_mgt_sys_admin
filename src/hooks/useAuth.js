import { useSelector } from 'react-redux'
import { selectCurrentToken } from "../redux/features/auth/authSlice"
import jwtDecode from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isManager = false
    let isAdmin = false
    let status = "employee"

    if (token) {
        const decoded = jwtDecode(token)
        const { email, role } = decoded

        isManager = role.includes('manager')
        isAdmin = role.includes('admin')

        if (isManager) status = "manager"
        if (isAdmin) status = "admin"

        return { email, role, status, isManager, isAdmin }
    }

    return { email: '', role: '', isManager, isAdmin, status }
}
export default useAuth