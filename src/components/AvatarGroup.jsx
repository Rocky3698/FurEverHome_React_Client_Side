import { Avatar } from "@material-tailwind/react";
import profile1 from '../assets/profileImg/profile11.jpeg'
import profile2 from '../assets/profileImg/profile31.jpeg'
import profile3 from '../assets/profileImg/profile51.jpeg'
const AvatarGroup = () => {
    return (
        <div className="flex items-center -space-x-4">
            <Avatar
                variant="rounded"
                alt="user 1"
                className="border-2 border-white hover:z-10 focus:z-10 rounded-full w-16 h-16"
                src={profile1}
            />
            <Avatar
                variant="rounded"
                alt="user 3"
                className="border-2 border-white hover:z-10 focus:z-10 rounded-full w-16 h-16"
                src ={profile2}            
            />
            <Avatar
                variant="rounded"
                alt="user 5"
                className="border-2 border-white hover:z-10 focus:z-10 rounded-full w-16 h-16"
                src ={profile3}
            />
        </div>
    );
};

export default AvatarGroup;

