import Action     from '../../../../../../lib/domain-model/Action.mjs';

export default async function checkSideEffects({ adminId }) {
    const actions = await Action.findAll({ where : {
        data : { '"adminId"': adminId },
        type : 'RESET_ADMIN_PASSWORD'
    } });

    if (!actions.length) {
        throw new Error('Action with type "RESET_ADMIN_PASSWORD" should be created');
    }
}