import {Icon} from "../icons";
import {Text} from "../Text";
import {Title} from "../Title";

interface CalendarCardProps {
    title: string,
    subtitle: string,
    date: string
}

export const CalendarCard = ({
    title,
    subtitle,
    date
                             }: CalendarCardProps) => {

    return (
        <div className={'flex items-center p-0 h-[64px] bg-secondary-light'}>
            <div className={'flex items-center justify-center bg-secondary h-full w-[54px]'}>
                <Icon variant={'pill'} color={'text-white'} />
            </div>
            <div className={'flex flex-col gap-0 w-full py-2 px-4'}>
                <Text variant={'body1'}>{subtitle}</Text>
                <div className={'flex justify-between items-center'}>
                    <Title order={'h3Bold'}>
                        {title}
                    </Title>
                    <Text variant={'body2'} color={'text-primary'}>
                        {date}
                    </Text>
                </div>
            </div>
        </div>
    )

}