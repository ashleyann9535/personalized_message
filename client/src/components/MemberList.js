import axios from "axios";

export const MemberList = (props) => {
    const {list} = props

  return (
    <div>
        {list
            .sort((a, b) => {
              if (a.firstname < b.firstname) {
                return -1;
              }
              if (a.firstname > b.firstname) {
                return 1;
              }
              return 0;
            })
            .filter((member) =>{
              return member.isActive !== false
            })
            .map((member, index) => {
              return (
                <div className="">
                  <p key={index} >
                      {member.firstname} {member.lastname}
                  </p>
                </div>
              );
            })}
    </div>
  )
}
