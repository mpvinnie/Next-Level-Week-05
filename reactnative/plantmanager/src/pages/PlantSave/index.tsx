import React, { useState } from 'react'
import { useRoute } from '@react-navigation/core'
import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import { format, isBefore } from 'date-fns'

import { Alert, Platform } from 'react-native'
import { SvgFromUri } from 'react-native-svg'
import waterdrop from '../../assets/waterdrop.png'
import { Button } from '../../components/Button'
import { loadPlant, Plant, savePlant } from '../../libs/storage'

import {
  Container,
  PlantInfo,
  PlantName,
  PlantAbout,
  Controller,
  TipContainer,
  TipImage,
  TipText,
  AlertLable,
  DateTimePickerButton,
  DateTimePickerText
} from './styles'

interface Params {
  plant: Plant
}

export function PlantSave() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios')

  const route = useRoute()
  const { plant } = route.params as Params

  function handleChangeTime(_event: Event, dateTime: Date | undefined) {
    if(Platform.OS === 'android') {
      setShowDatePicker(state => !state)
    }

    if(dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date())
      return Alert.alert('Escolha uma hora no fururo! ⏰')
    }

    if(dateTime) {
      setSelectedDateTime(dateTime)
    }
  }

  function handleOpenDateTimePickerFroAndroid( ) {
    setShowDatePicker(state => !state)
  }

  async function handleSave() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime
      })
    } catch {
      Alert.alert('Não foi possível salvar. 😥')
    }
  }

  return (
    <Container>
      <PlantInfo>
        <SvgFromUri uri={plant.photo} height={150} width={150} />

        <PlantName>{plant.name}</PlantName>

        <PlantAbout>{plant.about}</PlantAbout>
      </PlantInfo>

      <Controller>
        <TipContainer>
          <TipImage source={waterdrop} />

          <TipText>{plant.water_tips}</TipText>
        </TipContainer>

        <AlertLable>Escolha o melhor horário para ser lembrado:</AlertLable>
        
        {
          showDatePicker && (
            <DateTimePicker
              value={selectedDateTime}
              mode="time"
              display="spinner"
              onChange={handleChangeTime}
            />
          )
        }

        { Platform.OS === 'android' && (
          <DateTimePickerButton onPress={handleOpenDateTimePickerFroAndroid}>
            <DateTimePickerText>{`Mudar ${format(selectedDateTime, 'HH:mm')}`}</DateTimePickerText>
          </DateTimePickerButton>
        )}

        <Button onPress={handleSave}>
          Cadastrar planta
        </Button>
      </Controller>
    </Container>
  )
}