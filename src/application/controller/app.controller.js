export default function AppController() {
    this.appName = "Dropdown demo";

    this.selectedCity = "";
    this.selectedNumber = "";

    this.cities = [
        {
            value: 'Paris',
            selected: false
        },
        {
            value: 'Moscow',
            selected: false
        },
        {
            value: 'San Francisco',
            selected: true
        }
    ];

    this.number = [
        {
            value: 'One',
            selected: false
        },
        {
            value: 'Two',
            selected: false
        },
        {
            value: 'Three',
            selected: false
        },
        {
            value: 'Four',
            selected: false
        },
        {
            value: 'Five',
            selected: true
        },
        {
            value: 'Six',
            selected: false
        }
    ];
}