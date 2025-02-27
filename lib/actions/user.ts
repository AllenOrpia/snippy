import User from "../models/Users";

import connect from "../mongodb/connect";

export const createOrUpdateUser = async (
  id: string,
  email_address: string,
  username: string | null
) => {

    try {
            await connect();
        
            const user = await User.findOneAndUpdate(
                {userId: id},
                {
                    $set:{
                        name: username,
                        email: email_address,
        
                    },
                },
                {
                    new: true, upsert: true
                }
            );
        
            return user;

    } catch(err) {
        console.log('Error creating or updating error:', err)
    }

};


export const deleteUser = async (id: string | undefined) => {
    try {
        await connect();

        await User.findOneAndDelete({userId: id});

    } catch(err) {
        console.log('Error deleting user:', err)
    }
}