import styled from 'styled-components'
import ReviewDetailTopPage from '../components/review/ReviewDetailTop';

const ReviewDetail = () => {
    return (
        <StyledContent>
            <ReviewDetailTopPage/>
        </StyledContent>
    );
};

export default ReviewDetail;

const StyledContent = styled.h1`
    height: 100%;
    background-color: white;
    color: black;
    margin-top: 5px;
`;