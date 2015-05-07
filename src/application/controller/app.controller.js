export default function AppController() {
    this.appName = "Dropdown demo";

    this.curentCity = "";
    this.curentCookie = "";

    this.city = [
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

    this.cookie = [
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