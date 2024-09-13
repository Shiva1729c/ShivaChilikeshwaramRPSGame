import {ChoiceItem, ImageButton, ImageElement} from './styledComponents'

const ChoiceButtons = props => {
  const {choicesDetails, getSelectedImages} = props
  const {imageUrl, id} = choicesDetails

  const onClickingImage = () => {
    getSelectedImages(imageUrl)
  }

  return (
    <ChoiceItem>
      <ImageButton
        type="button"
        data-testid={`${id.toLowerCase()}Button`}
        onClick={onClickingImage}
      >
        <ImageElement src={imageUrl} alt={id} />
      </ImageButton>
    </ChoiceItem>
  )
}

export default ChoiceButtons
