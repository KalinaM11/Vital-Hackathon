import { ProgressBar } from 'primereact/progressbar';
import { useStatus } from '../../../context/context';

export const StatusBarComponent = () => {
    const { mood, happiness, energy, hydration, nutrients, setStatus } = useStatus();
    return (
        <div className="card">
                <h2>Mood </h2>
                <h2>Happiness </h2>
                <ProgressBar value={happiness} />
                <h2>Energy </h2>
                <ProgressBar value={energy} />
                <h2>Hydration </h2>
                <ProgressBar value={hydration} />
                <h2>Nutrients </h2>
                <ProgressBar value={nutrients} />
        </div>
    )
}


        