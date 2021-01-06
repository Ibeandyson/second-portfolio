import React from 'react';
import {Bar, Pie} from 'react-chartjs-2';

let data = {
    labels: [
        '',
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'React Native',
        'Redux',
        'Nodejs',
        'Express',
        'MongoDB',
        'Fibase',
        'Git',
        ''
    ],
    datasets: [
        {
            label: 'Skill Progress Statistics',
            data: [0, 99, 80, 80, 85, 80, 80, 50, 50, 50, 60, 50, 0],
            backgroundColor: [
                'white',
                '#e85d04',
                '#f7b267',
                '#dddf00',
                '#a9d6e5',
                '#023e7d',
                '#abc4ff',
                '#008000',
                '#b7e4c7',
                '#004b23',
                '#fca311',
                '#d00000',
                'white'
            ],

            borderWidth: 1
        }
    ]
};
export default function TechnicalSkils() {
    return (
        <div>
            <h1 style={{fontWeight: 'bolder', color: '#008037'}}>Technical Skills</h1>
            <div className="card d-none d-md-block d-lg-block">
                <div className="card-body ">
                    <Bar data={data} width={100} height={500} options={{maintainAspectRatio: false}} />
                </div>
            </div>
            <div className="d-sm-block d-md-none d-lg-none">
                <Pie
                    style={{marginTop: '-50px'}}
                    data={data}
                    width={100}
                    height={100}
                    options={{
                        title: {
                            display: true,
                            text: 'Skill Progress Statistics',
                            fontSize: 10
                        },
                        legend: {
                            display: true,
                            position: 'left'
                        }
                    }}
                />
            </div>
        </div>
    );
}
