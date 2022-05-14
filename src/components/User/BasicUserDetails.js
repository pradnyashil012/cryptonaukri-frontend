const BasicUserDetails = ({user}) =>{
    return(<>
    <div className="bg-gray-900 p-2 rounded">
        <div className="flex gap-2">
            <div>
                <img className={`w-20 h-20 rounded shadow-lg`} src={`https://avatars.dicebear.com/api/initials/${user?.firstName +" "+ user?.lastName}.svg`} />
            </div>
            <div>
                <span className={`text-md`}>{user?.firstName + " " +user?.lastName}</span><br/>
                <span className="text-xs text-gray-200">{user?.email}</span><br/>
                <span className="tetx-base text-blue-500">Community Rank : 130</span>
            </div>
        </div>
        <button className="bg-gray-700 rounded p-1 text-xs text-center w-full mt-4">Edit Profile</button>

        <div className="py-3 px-1">

            <span>Resume</span><br/>
            <a className="text-red-500 text-xs" href="https://drive.google.com/drive/folders/1KB7nO1HGXsBEzy-z5TffaAfWYhregiCT">{"https://drive.google.com/drive/folders/1KB7nO1HGXsBEzy-z5TffaAfWYhregiCT".substring(0, 60)}...</a>

        </div>
        
        <div className="mt-6">
            <span>Community Stats</span>
        </div>
    </div>
    </>);
}

export default BasicUserDetails;