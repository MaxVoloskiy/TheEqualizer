/**
 * Effects routes module
 *
 * @request  {post} /protected
 * @request  {post} /
 */

import User from '../models/user';
import response from '../helpers/errorHandler';

const aproximateValidatorError = message => message.substr(message.lastIndexOf(':') + 1);

const getEffectsList = async (req, res) => {
  const { title } = req.query;
  const { userId } = req;

  try {
    const { effects } = await User.findOne({ _id: userId }, 'effects');
    const findedEffect = effects.find(effect => effect.title === title);

    if (!findedEffect) {
      res.status(404).json({
        error: 'Preset with this title is not found!',
      });
    }

    return res.status(200).json(findedEffect);
  } catch (error) {
    return response(res, error.message, error.code);
  }
};

const saveEffect = async (req, res) => {
  const { title, presets } = req.body;
  const { userId, token } = req;

  try {
    const filterExpression = { _id: userId, 'effects.title': { $ne: title } };
    const updateExpression = { $addToSet: { effects: { title, presets } } };
    const config = { new: true, runValidators: true };

    const result = await User.findOneAndUpdate(filterExpression, updateExpression, config);
    if (!result) {
      res.status(400).json({
        error: 'Effect with this title already exists',
      });
    }

    return res.status(201).json({ success: 'The preset have been saved', token });
  } catch (error) {
    return response(
      res,
      aproximateValidatorError(error.message),
      error.code,
    );
  }
};

const deleteEffect = async (req, res) => {
  const { title } = req.body;
  const { userId } = req;

  try {
    const filterExpression = { _id: userId, 'effects.title': { $in: title } };
    const updateExpression = { $pull: { effects: { title } } };
    const result = await User.findOneAndUpdate(filterExpression, updateExpression);

    if (!result) {
      res.status(404).json({
        error: 'Effect with this title is not found',
      });
    }

    return res.status(200).json('The preset have been deleted');
  } catch (error) {
    return response(res, error.message, error.code);
  }
};

const getUserTitles = async (req, res) => {
  try {
    const { userId, token } = req;
    const { effects } = await User.findOne({ _id: userId });

    if (!effects) {
      res.status(404).json({
        error: 'Effect not found',
      });
    }

    return res.status(200).json({
      userPresets: effects.map(effect => effect.title),
      token,
    });
  } catch (error) {
    return response(res, error.message, error.code);
  }
};

export default {
  getEffectsList,
  saveEffect,
  deleteEffect,
  getUserTitles,
};
