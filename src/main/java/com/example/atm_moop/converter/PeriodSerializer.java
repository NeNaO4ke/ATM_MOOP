package com.example.atm_moop.converter;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

import java.io.IOException;
import java.time.Period;

public class PeriodSerializer extends StdSerializer<Period> {

    protected PeriodSerializer(Class<Period> t) {
        super(t);
    }


    public PeriodSerializer() {
        this(null);
    }

    public static String format(Period period) {
        if (period == Period.ZERO) {
            return "0 days";
        } else {
            StringBuilder buf = new StringBuilder();
            if (period.getYears() != 0) {
                if (period.getYears() == 1)
                    buf.append(period.getYears()).append(" year");
                else
                    buf.append(period.getYears()).append(" years");
                if (period.getMonths() != 0 || period.getDays() != 0) {
                    buf.append(", ");
                }
            }

            if (period.getMonths() != 0) {
                if (period.getMonths() == 1)
                    buf.append(period.getMonths()).append(" month");
                else
                    buf.append(period.getMonths()).append(" months");
                if (period.getDays() != 0) {
                    buf.append(", ");
                }
            }

            if (period.getDays() != 0) {
                if (period.getDays() == 1)
                    buf.append(period.getDays()).append(" day");
                else
                    buf.append(period.getDays()).append(" days");
            }
            return buf.toString();
        }
    }

    @Override
    public void serialize(Period period, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        jsonGenerator.writeStartObject();
        jsonGenerator.writeStringField("period", format(period));
        jsonGenerator.writeEndObject();
    }


}
