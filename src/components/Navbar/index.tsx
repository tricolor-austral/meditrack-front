import { useNavigate } from 'react-router-dom';
import { Icon } from "../Icons";
import { Text } from "../Text";

interface NavbarProps {
    options: { label: string; icon: 'home' | 'medic' | 'prescriptions' | 'calendar' }[];
    selected: string;
    onChange: (value: string) => void;
}

export const Navbar = ({ options, selected, onChange }: NavbarProps) => {
    const navigate = useNavigate();

    const handleNavigation = (label: string) => {
        onChange(label);
        if (label === 'Home') {
            navigate('/');
        } else if (label === 'Medics') {
            navigate('/medics');
        }
    };

    return (
        <div className="flex w-full p-3 bg-white gap-3 justify-around max-w-[400px]">
            {options.map((option) => (
                <div
                    key={option.label}
                    onClick={() => handleNavigation(option.label)}
                    className="flex flex-col justify-center gap-1 items-center cursor-pointer"
                >
                    <Icon variant={option.icon} size="small" color={selected === option.label ? 'text-primary' : 'text-black'} />
                    <Text
                        variant="body2"
                        color={selected === option.label && '#61A5C2'}
                        className={`text-[8px] font-light ${selected === option.label ? 'text-primary' : 'text-black'}`}
                    >
                        {option.label}
                    </Text>
                </div>
            ))}
        </div>
    );
};
