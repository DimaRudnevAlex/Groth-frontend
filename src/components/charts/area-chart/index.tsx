import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    ScriptableContext,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { FC } from 'react';
import { IAreaChartProps } from '../../../common/types/assets';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
);
const optionsIntl: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
};

const options = {
    responsive: true,
    scales: {
        x: {
            display: false,
            grid: {
                display: false,
            },
        },
        y: {
            display: false,
            grid: {
                display: false,
            },
        },
    },
    plugins: {
        legend: {
            display: false,
        },
    },
};

const AreaChart: FC<IAreaChartProps> = (props) => {
    const { data } = props;
    const values = {
        labels: data.map((element) =>
            Intl.DateTimeFormat('ru-RU', optionsIntl).format(element[0]),
        ),
        datasets: [
            {
                fill: 'start',
                label: 'Цена',
                data: data.map((element: number[]) => element[1]),
                backgroundColor: (context: ScriptableContext<'line'>) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 180);
                    gradient.addColorStop(0, '#C1EF00');
                    gradient.addColorStop(1, '#232323');
                    return gradient;
                },
            },
        ],
    };
    return <Line options={options} data={values} />;
};

export default AreaChart;
