module.exports = (mongoose) => {
    const schema = mongoose.Schema(
      {
        ngaynhan: String,
        gionhan: String,
        Temperature: String,
        Pressure: String,
        Altitude: String,
        SealevelPressure: String,
      },
      { timestamps: true }
    );

    schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

    const CamBien = mongoose.model("cambien", schema);

    return CamBien;
  };