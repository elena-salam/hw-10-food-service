import itemTemplates from '../handlebar/items.hbs';
import menuItems from "../menu.json";


const markup = itemTemplates(menuItems);
const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);






