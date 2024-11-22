import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import styled from 'styled-components'
import ImageUpload from './ImageUpload'
import Star from './Star'
import { useState } from 'react'

const ReviewWrite = () => {

    const schema = yup.object().shape({
        title: yup.string().required(),
        name: yup.string().max(10).required(),
        platform: yup.string().required(),
        stars: yup.number().min(1).max(5).required(),
        review: yup.string().max(300, '300자 이내로 입력해주세요.').required('강의평이 입력되지 않았습니다.'),
        period: yup.string().required(),
    });

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    // 이미지 업로드
    const [uploadImg, setUpLoadImg] = useState(null);

    const handleImg = (imgData) => {
        setUpLoadImg(imgData);
    }

    const onSubmit = (data) => {
        const formData = {
            ...data,
            image: uploadImg,
        };
        console.log(formData);
    }

    // 별점
    const [rating, setRating] = useState(0);

    const handleStarChange = (newRating) => {
        setRating(newRating);
        setValue("stars", newRating);
        console.log(newRating);
    }

    // 강의평 글자수
    const watchTextarea = watch('review', '');
    const textareaCount = (watchTextarea.length);

    return (
        <WriteContainer>
            <Title>
                <h1>강의평 등록</h1>
                <small>* 표시 항목은 필수 입력 항목입니다.</small>
            </Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput>
                    <p><span>*</span> 강의명</p>
                    <input
                        type='text' {...register("title")}
                        placeholder='강의명을 입력해주세요.' />
                </TextInput>
                <TextInput>
                    <p><span>*</span> 강사명</p>
                    <input 
                        type='text' {...register("name")}
                        placeholder='강사명을 입력해주세요.' />
                </TextInput>
                <TextInput>
                    <p><span>*</span> 플랫폼</p>
                    <input 
                        type='text' {...register("platform")}
                        placeholder='강의 플랫폼을 입력해주세요.' />
                </TextInput>
                <ImageUpload 
                    onImageUpload={handleImg} />
                <StarInput>
                    <label htmlFor='rate'>
                        <Star onChange={handleStarChange}/>
                    </label>
                    <input type='hidden' id='rate' {...register("stars")} value={rating} />
                </StarInput>
                <>
                    <p><span>*</span> 강의평</p>
                    <ReviewInput>
                        <textarea
                            name='review'
                            placeholder='강의에 대한 후기를 작성해주세요.'
                            cols="100"
                            rows="10"
                            maxLength={300}
                            {...register("review")} />
                            <span>{textareaCount}/300</span>
                        </ReviewInput>
                        <Error>{errors.review?.message}</Error>
                </>
                <RadioInput>
                    <p><span>*</span> 강의를 다 듣는데 얼마나 걸렸나요?</p>
                    <label><input type='radio' {...register("period")} value='1w'/>일주일 이내</label>
                    <label><input type='radio' {...register("period")} value='3m'/>3달 이내</label>
                    <label><input type='radio' {...register("period")} value='6m'/>6달 이내</label>
                    <label><input type='radio' {...register("period")} value='1y'/>1년 이내</label>
                    <label><input type='radio' {...register("period")} value='ing'/>아직 수강중임</label>
                </RadioInput>
                <BtnContainer>
                    <button type='submit'>리뷰 등록하기</button>
                </BtnContainer>
            </form>
        </WriteContainer>
    );
};

export default ReviewWrite;


const WriteContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 1.5rem;
    }

    span {
        color: #E55F00;
    }

    form {
        width: 40%;
    }
`;

const Title = styled.div`
    width: 80%;
    text-align: center;

    small {
        color: #E55F00;
        position: relative;
        left: 280px;
    }
`;

const TextInput = styled.div`
    input {
        width: 100%;
        height: 50px;
        border: 1px solid #E55F00;
        padding-left: 20px;
        box-shadow: 0 5px 5px gray;
        &:focus{
            outline: none;
        }
    }
`;

const StarInput = styled.div`

`;

const ReviewInput = styled.div`
    position: relative;
        
    span {
        position: absolute;
        top: 80%;
        left: 5%;
        color: gray;
    }

    textarea {
        background-color: #FFF6EB;
        border: none;
        border-radius: 10px;
        padding: 20px;
        &:focus{
            outline: none;
        }
        &::placeholder {
            color: black;
        }
    }
`;

const Error = styled.small`
    color: #E55F00
`;

const RadioInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 50px;
    
    label {
        font-size: 1.2rem;
    }
    
    input {
        margin-right: 10px; /* 라디오 버튼과 텍스트 간의 간격 */
    }
`;

const BtnContainer = styled.div`
    display: flex;
    justify-content: center;

    button {
        width: 80%;
        height: 50px;
        background-color: #E55F00;
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
    }
`;