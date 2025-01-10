import React, { Component } from "react";
import "./DynamicFormBuilder.scss";

class DynamicFormBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [],
      formData: {},
    };
  }

  addField = (type) => {
    // TODO: Implement logic to add a new form field based on the specified type.
    // Ensure that the new field is added to the state and properly rendered in the UI.
  };

  handleFieldChange = (id, value) => {
    this.setState((prevState) => ({
      formData: { ...prevState.formData, [id]: value },
    }));
  };

  removeField = (id) => {
    // TODO: Implement logic to remove the form field by its unique ID.
    // Ensure that the state is updated properly and the field is removed from the UI.
  };

  renderField = (field) => {
    const { formData } = this.state;
    switch (field.type) {
      case "text":
        return (
          <div className="container-form" key={field.id}>
            <label>{field.label}</label>
            <input
              type="text"
              value={formData[field.id] || ""}
              onChange={(e) => this.handleFieldChange(field.id, e.target.value)}
            />
            <button onClick={() => this.removeField(field.id)}>Remove</button>
          </div>
        );
      case "number":
        return (
          <div className="container-form" key={field.id}>
            <label>{field.label}</label>
            <input
              type="number"
              value={formData[field.id] || ""}
              onChange={(e) => this.handleFieldChange(field.id, e.target.value)}
            />
            <button onClick={() => this.removeField(field.id)}>Remove</button>
          </div>
        );
      case "textarea":
        return (
          <div className="container-form" key={field.id}>
            <label>{field.label}</label>
            <textarea
              value={formData[field.id] || ""}
              onChange={(e) => this.handleFieldChange(field.id, e.target.value)}
            />
            <button onClick={() => this.removeField(field.id)}>Remove</button>
          </div>
        );
      default:
        return null;
    }
  };

  render() {
    const { fields, formData } = this.state;
    return (
      <div className="DynamicFormBuilder">
        <h2>Dynamic Form Builder</h2>

        <div>
          <button onClick={() => this.addField("text")}>Add Text Field</button>
          <button onClick={() => this.addField("number")}>
            Add Number Field
          </button>
          <button onClick={() => this.addField("textarea")}>
            Add Textarea Field
          </button>
        </div>

        <form>{fields.map((field) => this.renderField(field))}</form>

        <div>
          <h3>Form Data:</h3>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      </div>
    );
  }
}

export default DynamicFormBuilder;
