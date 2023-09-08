import styled from "styled-components";


export const Column = styled.div`
    display: flex;
    flex-direction: column;

    #space-between{
        justify-content: space-between;
    }
    #center{
        justify-content: center;
    }
    #start{
        justify-content: start;
    }
    #end{
        justify-content: end;
    }

`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;

    #space-between{
        justify-content: space-between;
    }
    #center{
        justify-content: center;
    }
    #start{
        justify-content: start;
    }
    #end{
        justify-content: end;
    }
`;

export const Padding = styled.div`
    padding: ${props => props.padding || "4px"};
`;

export const Grid = styled.div`
    display: grid;
    column-gap: 15px;
    padding: 16px;
    grid-template-areas: "CD CD CD";
    grid-template-columns: ${(props) =>
           props.checkMockup.length === 4 ? "repeat(4, 24.5%)" : props.checkMockup.length === 3 ? "repeat(3, 33%)" : props.checkMockup.length === 2 ? "repeat(2, 50%)" : "repeat(2, 50%)"};

    @media (max-width: 1200px) {
        grid-template-areas: "CD CD";
        grid-template-columns: ${(props) =>
            props.checkMockup ? "repeat(2, 50%)" : "repeat(1, 100%)"};
    }

    @media (max-width: 800px) {
        grid-template-areas: "CD";
        padding-left: 1%;
        grid-template-columns: ${(props) =>
            props.checkMockup ? "repeat(1, 100%)" : "repeat(1, 100%)"};
    }


    @media (max-width: 360px) {
        padding-left: 0px;
        padding-right: 0px;
    }
  
`;
