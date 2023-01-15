import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import validform from './modules/validform'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'



timer('16 january 2023')
menu()
modal()
validform()
tabs()
slider()
calc(1000)
sendForm({
    formId: 'form1',
    someElem: [
    {
        type: 'block',
        id: 'total'
    }]
});
sendForm({
    formId: 'form2',
    someElem: [
    {
        type: 'block',
        id: 'total'
    }]
});
sendForm({
    formId: 'form3',
    someElem: [
    {
        type: 'block',
        id: 'total'
    }
    ]
});


