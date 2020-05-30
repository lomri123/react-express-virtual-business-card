import React from "react";
import Modal from "react-modal";
import { connect } from "formik";
import AvatarEditor from "react-avatar-editor";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");

class ImageEdit extends React.Component {
  state = {
    zoom: 1,
    rotate: 0
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = "#f00";
  };

  closeModal = () => {
    this.props.formik.setFieldValue("modalIsOpen", false);
    this.setState({ zoom: 1, rotate: 0 });
  };

  onClickSave = image => {
    if (this.editor) {
      const canvasScaled = this.editor.getImageScaledToCanvas();
      const previewImage = this.editor.getImageScaledToCanvas().toDataURL();

      canvasScaled.toBlob(myBlob => {
        const fileOfBlob = new File([myBlob], image.name);
        this.props.formik.setFieldValue("imageFile", fileOfBlob);
      });
      this.props.formik.setFieldValue("previewImage", previewImage);
      this.closeModal();
    }
  };

  onClickCancel = () => {
    this.props.formik.setFieldValue("previewImage", null);

    this.closeModal();
  };

  handleZoomSlider = (event, value) => {
    this.setState({ zoom: value });
  };

  handleRoate = action => {
    let tmpDegress = this.state.rotate;
    if (action === "plus") {
      tmpDegress += 90;
    } else {
      tmpDegress -= 90;
    }
    this.setState({ rotate: tmpDegress });
  };

  setEditorRef = editor => (this.editor = editor);

  render() {
    const { modalIsOpen, previewImage } = this.props.formik.values;
    const { zoom, rotate } = this.state;
    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Resize Image"
        >
          <AvatarEditor
            ref={this.setEditorRef}
            image={previewImage}
            width={250}
            height={250}
            border={50}
            scale={zoom}
            borderRadius={200}
            rotate={rotate}
          />
          <div className="row justify-content-center">
            <label
              style={{
                marginRight: 10
              }}
            >
              Zoom
            </label>
            <Slider
              min={1}
              max={5}
              step={0.1}
              value={zoom}
              name="zoom"
              onChange={this.handleZoomSlider}
              style={{ width: 200 }}
            />
          </div>
          <div className="row justify-content-center">
            <i
              className="fa fa-undo px-2 mx-1 btn"
              onClick={() => this.handleRoate("minus")}
            />
            <i
              className="fa fa-undo fa-flip-horizontal px-2 mx-1 btn"
              onClick={() => this.handleRoate("plus")}
            />
          </div>
          <div className="row justify-content-center">
            <Button
              className="col-4"
              onClick={() => this.onClickSave(previewImage)}
            >
              Save
            </Button>
            <Button className="col-4" onClick={this.onClickCancel}>
              Cancel
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default connect(ImageEdit);
