import { message } from 'antd';
import CarrierService from '../../services/CarrierService';
import * as types from './../types';

const search = (dispatch, query) => {
    CarrierService.search(query)
        .then(res => {
            const { status, json } = res;
            if (CarrierService.isOkStatus(status)) {
                dispatch({
                    type: types.CHECK,
                    hasCarrier: json.hasCarrier
                })
            } else {
                message.error(json.message);
            }
        })
}
const subscribe = (email) => {
    CarrierService.subscribe({ email })
        .then(res => {
            const {status, json} = res;
            if(CarrierService.isOkStatus(status)) {{
                message.success(json.message);
            }} else {
                message.error(json.message);
            }
        })
}

export { search, subscribe }