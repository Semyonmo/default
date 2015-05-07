import $ from "jquery";

export default angular
    .module('componentDropdown', [])
    .directive('cDropdown', dropdown);

function dropdown() {
    var directive = {
        link: link,
        template: `
        <div class="dropdown">
            <div class="dropdown__selected" tabindex="0">{{dropdown.value}}</div>

            <div class="dropdown__list">
                <div class="dropdown__list-item"
                ng-click="dropdown.selectOption({value: null})"
                ng-class="{ selected: dropdown.empty }">

                </div>
                <div class="dropdown__list-item"
                    ng-repeat="option in dropdown.list"
                    ng-class="{ selected: option.selected }"
                    ng-click="dropdown.selectOption(option)">
                    {{option.value}}
                </div>
            </div>
        </div>`,
        restrict: 'EA',
        controller: DropdownController,
        controllerAs: 'dropdown',
        bindToController: true,
        scope: {
            list: '=',
            value: '='
        }
    };
    return directive;

    function link(scope, element, attrs) {
        var zindex = 99;
        setTimeout(function () {
            var dropdownListWidth = $('.dropdown__list', element).width();
            $('.dropdown', element).css('width', dropdownListWidth + 1);
        }, 0);

        scope.$watch('dropdown.list', function () {
            console.log();
            scope.dropdown.selectOption(scope.dropdown.getSelected());
        }, true);

        $('.dropdown__selected', element).focusin(function () {
            $('.dropdown__list').removeClass('display');
            $('.dropdown__list', element).addClass('display');
        });

        $(document).mouseup(function (e) {
            var dropdownList = $('.dropdown');

            if (!dropdownList.is(e.target)
                && dropdownList.has(e.target).length === 0)
            {
                $('.dropdown__list').removeClass('display');
            }
        });
    }


    function DropdownController() {
        var dropdown = this;

        /**
         *
         * @param option
         * @returns {boolean}
         */
        dropdown.selectOption = function selectOption(option) {
            if(option.value == null ) {
                dropdown.empty = true;
                dropdown.value = null;
                dropdown.unSelect();
                return false;
            }

            dropdown.unSelect();

            dropdown.value =  option.value;
            dropdown.empty = false;
            option.selected = true;
        };


        dropdown.unSelect = function unSelect() {
            dropdown.list.forEach(function (item, index, array) {
                item.selected = false;
            });
        };

        dropdown.getSelected = function () {
            var value = {
                value: null
            };
            dropdown.list.forEach(function (item, index, array) {
                if(item.selected === true) {
                    value = item;
                }
            });
            return value;
        }
    }
}

