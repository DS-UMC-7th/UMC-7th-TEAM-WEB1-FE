import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import styled from 'styled-components'
import ImageUpload from './ImageUpload'
import Star from './Star'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import color from '../../styles/color'
import font from '../../styles/font'

const ReviewWrite = () => {

    const schema = yup.object().shape({
        title: yup.string().required("강의명 입력은 필수입니다."),
        name: yup.string().max(10, "10자 이내로 입력해주세요.").required("강사명 입력은 필수입니다."),
        platform: yup.string().required("플랫폼 입력은 필수입니다."),
        stars: yup.number().min(1).max(5).required("별점 입력은 필수입니다."),
        review: yup.string().max(300, '300자 이내로 입력해주세요.').required('강의평이 입력되지 않았습니다.'),
        period: yup.string().required(),
    });

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    // 이미지 업로드
    const [uploadImg, setUpLoadImg] = useState(null);

    const handleImg = (imgData) => {
        setUpLoadImg(imgData);
    }

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        // const formData = {
        //     ...data,
        //     image: uploadImg,
        // };
        try {
            const response = await axios.post('http://3.38.66.123:3000/api/reviews', {
                lecture_id: 1,
                rating: data.stars,
                review: data.review,
                duration: data.period,
            });
            console.log("성공", response.data);
            alert("강의평 등록에 성공했습니다!");
            navigate("/");
        }
        catch (error) {
            console.log("실패", error);
        }
        // console.log(formData);
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

    // 강사명 글자수
    const watchName = watch('name', '');
    const nameCount = (watchName.length);

    // 강의명 검색
    const [searchTitle, setSearchTitle] = useState('');
    const [lectureList, setLectureList] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const handleTitleSearch = async () => {
        try {
            setIsSearching(true);
            const response = await axios.get('http://3.38.66.123:3000/api/lectures/search', {
                params: { keyword: searchTitle },
            });
            console.log("검색어: ", searchTitle);
            console.log(response.data.result);
            setLectureList(response.data.result || []);
        } catch (error) {
            console.log(error);
        } finally {
            setIsSearching(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (!isSearching && searchTitle.trim() !== '') {
                handleTitleSearch();
            }
        }
    }

    const handleLectureClick = (lectureName) => {
        setSearchTitle(lectureName);
        setLectureList([]);
    }

    // 플랫폼 선택
    const [platform, setPlatform] = useState('');

    const handlePlatformClick = (platformBtn) => {
        setPlatform(platformBtn);
        setValue("platform", platformBtn)
    }

    return (
        <WriteContainer>
            <Title>
                <h1>강의평 등록</h1>
                <small>* 표시 항목은 필수 입력 항목입니다.</small>
            </Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <>
                    <TextInput>
                        <p><span>*</span> 강의명</p>
                        <input
                            type='text' {...register("title")}
                            placeholder='강의명을 입력해주세요.'
                            value={searchTitle}
                            onChange={(e) => setSearchTitle(e.target.value)}
                            onKeyDown={handleKeyDown} />
                        <LectureList>
                            {lectureList.map((lecture) => (
                                <>
                                    <div key={lecture.id}
                                        onClick={() => handleLectureClick(lecture.lectureName)}>
                                        <p>{lecture.lectureName}</p>
                                        <span>{lecture.platform}</span>
                                        <span className='h-line'></span>
                                        <span>{lecture.instructorName}</span>
                                    </div>
                                    <div className='v-line'></div>
                                </>
                            ))}
                        </LectureList>
                    </TextInput>
                    <Error>{errors.title?.message}</Error>
                </>
                <TextInput>
                    <p><span>*</span> 강사명</p>
                    <input 
                        type='text' {...register("name")}
                        placeholder='강사명을 입력해주세요.' />
                        <span className='namecount'>{nameCount}/10</span>
                </TextInput>
                <Error>{errors.name?.message}</Error>
                <>
                    <TextInput>
                        <p><span>*</span> 플랫폼</p>
                        <input 
                            type='text' {...register("platform")}
                            placeholder='강의 플랫폼을 입력해주세요.'
                            value={platform}/>
                    </TextInput>
                    <BtnList>
                        <button type='button' onClick={() => handlePlatformClick('콜로소')}>콜로소</button>
                        <button type='button' onClick={() => handlePlatformClick('클래스101')}>클래스101</button>
                        <button type='button' onClick={() => handlePlatformClick('인프런')}>인프런</button>
                    </BtnList>          
                </>
                <ImageUpload 
                    onImageUpload={handleImg} />
                <VerticalLine />
                <>
                    <label htmlFor='rate'>
                        <Star onChange={handleStarChange}/>
                    </label>
                    <input type='hidden' id='rate' {...register("stars")} value={rating} />
                    <Error>{errors.stars?.message}</Error>
                </>
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
                    <label><input type='radio' {...register("period")} value='일주일 이내'/>일주일 이내</label>
                    <label><input type='radio' {...register("period")} value='3달 이내'/>3달 이내</label>
                    <label><input type='radio' {...register("period")} value='6달 이내'/>6달 이내</label>
                    <label><input type='radio' {...register("period")} value='1년 이내'/>1년 이내</label>
                    <label><input type='radio' {...register("period")} value='아직 수강중임'/>아직 수강중임</label>
                </RadioInput>
                <BtnContainer>
                    <button type='submit'>리뷰 등록하기</button>
                </BtnContainer>
                <VerticalLine />
            </form>
        </WriteContainer>
    );
};

export default ReviewWrite;


const WriteContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;

    p {
        ${font.eli_medium_24}
    }

    span {
        color: ${color.primary_main};
    }

    form {
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 40px;

        input {
            margin-top: 15px;
        }

        small {
            color: ${color.primary_main};
            ${font.eli_medium_14};
        }
    }
`;

const Title = styled.div`
    width: 80%;
    text-align: center;
    ${font.pre_medium_18};
    margin-top: 50px;

    h1 {
        margin-bottom: 20px;
    }

    small {
        color: ${color.primary_main};
        ${font.eli_medium_14};
        position: relative;
        left: 280px;
    }
`;

const TextInput = styled.div`
    input {
        width: 100%;
        height: 50px;
        border: 1px solid ${color.primary_main};
        padding-left: 20px;
        box-shadow: 0 5px 5px gray;
        &:focus{
            outline: none;
        }
    }
    .namecount {
        ${font.eli_medium_14}
        position: relative;
        top: -30px;
        right: -700px;
    }
`;

const LectureList = styled.div`
    border: 1px solid ${color.primary_main};
    .v-line {
        border-bottom: 1px solid ${color.primary_main};
        padding: 0px 20px;
    }
    div {
        ${font.pre_medium_14};
        padding: 20px;
            .h-line {
                border-right: 1.5px solid ${color.grayscale_6c};
                margin: 0px 5px;
            }
        }
    p {
        ${font.pre_medium_14};
        margin-bottom: 5px;
    }
    span {
        color: ${color.grayscale_6c};
    }
`;

const BtnList = styled.div`
    button {
        border-radius: 20px;
        padding: 10px 15px;
        border: 1px solid ${color.primary_main};
        background-color: transparent;
        ${font.eli_medium_14};
        color: ${color.primary_main};
        margin: 0 5px;
    }
`;

const VerticalLine = styled.div`
    margin: 50px 0;
    border-bottom: 2px solid ${color.grayscale_d9};
`;

const ReviewInput = styled.div`
    position: relative;

    span {
        position: absolute;
        top: 80%;
        left: 3%;
        color: gray;
        font-size: 12px;
    }

    textarea {
        margin-top: -20px;
        background-color: #FFF6EB;
        border: none;
        border-radius: 10px;
        padding: 20px;
        resize: none;
        &:focus{
            outline: none;
        }
        &::placeholder {
            color: black;
        }
    }
`;

const Error = styled.small`
    margin-top: -20px;
`;

const RadioInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 50px;
    
    label {
        ${font.pre_medium_18}
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
        background-color: ${color.primary_main};
        color: white;
        border: none;
        border-radius: 10px;
        ${font.pre_medium_18}
        font-weight: bold;
        text-align: center;
    }
`;