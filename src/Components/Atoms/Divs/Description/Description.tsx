import StyledDiv from './style';
import Image from 'next/image';

function Description({ data }: any) {
  console.log(data);

  let genderString;

  switch (data.gender) {
    case 0:
      genderString = '未定';
      break;
    case 1:
      genderString = '男の子';

      break;
    case 2:
      genderString = '女の子';

      break;

    default:
      break;
  }
  return (
    <StyledDiv>
      <div data-class='top'>
        <div data-class='top__image'>
          <Image
            src={data.image}
            alt='logo'
            layout='fill'
            objectFit='cover'
            priority
          />
        </div>

        <div data-class='top__catInfo'>
          <h2>{`< CAT INFO >`}</h2>
          <p>{data.address}</p>
          <p>{new Date(data['created_at']).toLocaleString()}</p>
          <p>投稿者 / {data.userId}</p>
          <p style={{ fontWeight: 'bolder' }}>名前 / {data.catName}</p>
          <p>性別 / {genderString}</p>
        </div>
      </div>

      <div data-class='bottom'>
        <h2>{`< FEATURES >`}</h2>
        {data.characteristic}
      </div>
    </StyledDiv>
  );
}

export default Description;
