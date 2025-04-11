import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { FC } from 'react';
import { ILineChartProps } from '../../../common/types/assets';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const optionsIntl: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
};

const LineChart: FC<ILineChartProps> = ({ data }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    const values = {
        labels: data[0].data.map((elem) =>
            Intl.DateTimeFormat('ru-RU', optionsIntl).format(elem[0]),
        ),
        datasets: [
            {
                label: 'Цена: ',
                data: data[0].data.map((elem) => elem[1]),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return (
        <Line data={values} options={options} width={'100%'} height={'20%'} />
    );
};

export default LineChart;
