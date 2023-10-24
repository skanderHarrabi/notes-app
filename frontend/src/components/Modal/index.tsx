import React from "react";
import {Button, Modal, Input, Form, Select} from "antd";
import {Note} from "../../API";

const {TextArea} = Input;

// Types
type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (param: boolean) => void;
  note?: Note;
  isCreateNote: boolean;
  onFinish: (values: Note) => void;
};

const {Option} = Select;

const CreateEditModal: React.FC<Props> = ({
  isModalOpen,
  setIsModalOpen,
  note,
  isCreateNote,
  onFinish,
}) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  type FieldType = {
    title: string;
    description: string;
  };

  return (
    <>
      <div className="modal_wrapper">
        <Modal
          title={isCreateNote ? "Add Note" : "Edit Note"}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <Form
            name="basic"
            labelCol={{span: 5}}
            labelAlign="left"
            initialValues={{remember: true}}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="title"
              name="title"
              initialValue={!isCreateNote ? note?.title : undefined}
              rules={[{required: true, message: "Please input note Title!"}]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="description"
              name="description"
              initialValue={!isCreateNote ? note?.description : undefined}
              rules={[
                {required: true, message: "Please input note Description!"},
              ]}
            >
              <TextArea rows={5} />
            </Form.Item>
            <Form.Item style={{textAlign: "center"}}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default CreateEditModal;
