import {Text} from "../Text";
import Clock from "../../assets/icons/clock.svg";
import Avatar from "@mui/material/Avatar";

interface UpcomingCardProps {
    name: string,
    speciality: string,
    date: string,
    imgSrc: string
}

export const UpcomingCard = ({
                name,
                speciality,
                date,
                imgSrc
                             }: UpcomingCardProps) => {

    return (
        <div className="bg-secondary rounded-lg p-4 flex items-center gap-4 mb-4 mt-2 cursor-pointer justify-between">
            <div className="text-base flex flex-col gap-2">
                <Text color={'white'} variant="body1Bold">{name}</Text>
                <Text color={'white'} variant="body2">{speciality}</Text>
                <div className="flex gap-2 px-2 rounded-md items-center bg-white">
                    <img style={{height: '12px'}} src={Clock} alt={''}/>
                    <Text color={'gray'} variant="body1">{date}</Text>
                </div>
            </div>
            <div>
                <Avatar src={imgSrc} alt="Avatar" sx={{width: 80, height: 80}}/>
            </div>
        </div>
    )

}