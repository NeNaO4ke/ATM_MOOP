package com.example.atm_moop.converter;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

import javax.money.MonetaryAmount;
import java.io.IOException;

public class MonetaryAmountSerializer extends StdSerializer<MonetaryAmount> {

    protected MonetaryAmountSerializer(Class<MonetaryAmount> t) {
        super(t);
    }


    public MonetaryAmountSerializer() {
        this(null);
    }

    @Override
    public void serialize(MonetaryAmount monetaryAmount, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        jsonGenerator.writeStartObject();
        jsonGenerator.writeStringField("currency", monetaryAmount.getCurrency().getCurrencyCode());
        jsonGenerator.writeNumberField("amount", monetaryAmount.getNumber().floatValue());
        jsonGenerator.writeEndObject();
    }
}
