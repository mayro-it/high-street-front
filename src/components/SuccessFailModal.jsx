import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

const SuccessFailModal = ({ visible, setVisible, hasCarrier }) => {
    return (
        <Modal
            maskStyle={{ background: 'rgba(164, 164, 164, 0.72)' }}
            centered={true}
            visible={visible}
            setVisible={setVisible}
            onCancel={() => setVisible(false)}
            footer={false}
            className={`sucess-fail-modal ${hasCarrier && 'succes-modal'}`}
            title=' '
        >
            <div className='sucess-fail-modal-header'>
                <div className='header-body'>
                    <div className='img-container'>
                        <img src='/assets/images/icons/attention.svg' />
                    </div>
                </div>
            </div>
            <div className='sucess-fail-body'>
                {hasCarrier ? 'You are onboarded !' : ' You are not onboarded.'}
            </div>
        </Modal>
    )
}

SuccessFailModal.propTypes = {

}

export default SuccessFailModal

