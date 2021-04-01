import Request from './Request';

class CarrierService extends Request {
    constructor() {
        super('carriers');
    }
    search(data) {
        const options = {
            method: 'GET',
        };
        return this.send({ path: `/search/?${Request.makeQuery(data)}`, options }).then(({ status, json }) => ({ status, json }));
    }
    subscribe(data) {
        const options = {
            method: 'POST',
            body: JSON.stringify(data)
        };

        return this.send({ path: `/subscribe`, options }).then(({ status, json }) => ({ status, json }));
    }
   
}

export default new CarrierService();