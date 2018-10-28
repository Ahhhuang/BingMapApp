var num_routing = 0;
var cur_routing = 0;

document.addEventListener('init', function (event) {
    var page = event.target;

    if (page.id === 'page_split') {
        page.querySelector('#list_item_home').onclick = function () {
            console.log('Navigate to home');
            //document.querySelector('#myNavigator').pushPage('splitter.html');
        }

        page.querySelector('#list_item_direction').onclick = function () {
            console.log('Navigate to direction');
            document.querySelector('#myNavigator').pushPage('./html/direction.html');
        }

        page.querySelector('#list_item_routing').onclick = function () {
            //console.log('Navigate to direction');
            document.querySelector('#myNavigator').pushPage('./html/routing.html');
            num_routing = 0;
            cur_routing = 0;
        }

    } else if (page.id === 'page_direct') {

        
        page.querySelector('#back_arw').onclick = function () {
            document.querySelector('#myNavigator').popPage();
        }
       
    } else if (page.id === 'page_routing') {

        page.querySelector('#back_arw').onclick = function () {
            document.querySelector('#myNavigator').popPage();
        }

        page.querySelector('#routing_plus').onclick = function () {

            var search_input = document.querySelector('#routing_input');

            if (search_input.value.length === 0 || num_routing >= 5) {
                search_input.value = '';
                return;
            } 
            //console.log(search_input.length);
            var list_item = ons._util.createElement('<ons-list-item id="list' + cur_routing+'">' + search_input.value +
                '<div class="right"> <a href="#"><i id=' + cur_routing + ' class="routing_times fas fa-times-circle fa-2x" onClick="deleteItem(this.id)"}></i></a></div>' +
                '</ons-list-item>');

            search_input.value = '';
            num_routing++;
            document.querySelector('#rounting_s_row').appendChild(list_item);

            

        }
    }
})

function deleteItem(id) {

    console.log(id);
    var item = document.getElementById("list" + id);
    item.parentNode.removeChild(item);

    num_routing--;
}