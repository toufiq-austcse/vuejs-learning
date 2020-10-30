import Inventory from '../components/views/Inventory.vue';
import Test from '../components/views/Test.vue';
import ItemDetails from '../components/views/ItemDetails.vue';
export const routes = [
    {
        path: '',
        component: Inventory
    },
    {
        path: '/item/:id',
        component: ItemDetails
    }
]