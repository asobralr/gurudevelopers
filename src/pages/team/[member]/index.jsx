import SEO from "@/src/common/seo";
import TeamDetails from "@/src/components/team-details";
import team_data from "@/src/data/team-data";
import Wrapper from "@/src/layout/wrapper";

const index = ({member}) => {
    const find_member_data = team_data.find(el => el.slug == member);
    console.log({find_member_data})
  return (
    <Wrapper>
      <SEO pageTitle={"GuruDevelopers - "+find_member_data.name} />
      <TeamDetails member={find_member_data}/> 
    </Wrapper>
  );
};

export const getServerSideProps = async (context) => {
    console.log({context})
    const member = context.params.member;
    console.log({member})
    return {
        props: {
            member
        }
    }
}

export default index;
