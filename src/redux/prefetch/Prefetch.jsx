import { store } from '../app/store'
import { employeeApiSlice } from '../features/employee/employeeApiSlice';
import { vehiclesApiSlice } from '../features/vehicle/vehiclesApiSlice';
import { usersApiSlice } from "../features/user/userApiSlice";
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {
    useEffect(() => {
        console.log('subscribing')
        const employee = store.dispatch(employeeApiSlice.endpoints.getEmployeeProfile.initiate())
        const employees = store.dispatch(employeeApiSlice.endpoints.adminGetEmployees.initiate())
        const users = store.dispatch(usersApiSlice.endpoints.getAllUser.initiate())
        const vehicles = store.dispatch(vehiclesApiSlice.endpoints.getVehicles.initiate())

        return () => {
            console.log('unsubscribing')
            employee.unsubscribe()
            employees.unsubscribe()
            users.unsubscribe()
            vehicles.unsubscribe()
        }
    }, [])

    return <Outlet />
}
export default Prefetch
